import { AudioContext } from "standardized-audio-context-mock";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { LoadStatus, Track } from "../logic/track";
import { Audio, electron, mockResource } from "./mocks";

vi.stubGlobal("AudioContext", AudioContext);
vi.stubGlobal("Audio", Audio);
vi.stubGlobal("electron", electron);

describe.concurrent("class Track", () => {
  let track: Track;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe.concurrent("track.fetchMetadata()", () => {
    const track = new Track(mockResource("House - Zenith v1.mp3"));

    it("should start with 'LoadStatus.Loading'", () => {
      expect(track.metadata.state).toBe(LoadStatus.Loading);
    });

    it.skip("should set isLoaded to true when finished", async () => {
      await track.fetchMetadata();
      expect(track.isLoaded.value).toBeTruthy();
    });

    it("should be able to fetch metadata", async () => {
      await track.fetchMetadata();
      expect(track.metadata.data).toBeTruthy();
    });

    it("should set the loading state of metadata to 'LoadStatus.Loaded'", async () => {
      await track.fetchMetadata();
      expect(track.metadata.state).toBe(LoadStatus.Loaded);
    });
  });

  beforeAll(async () => {
    track = new Track(mockResource("KOAN Sound & Asa - Starlite.flac"));
    await track.fetchAsyncData();
  });

  describe.concurrent("new Track()", () => {
    it("should be able to create an instance of a Track", async () => {
      expect(track).toBeTruthy();
    });

    it("should have metadata if the file actually has metadata", async () => {
      expect(track.metadata.data).toBeTruthy();
    });

    it("should have path property", async () => {
      expect(track.path).toBeTruthy();
    });

    it("should throw if file extension isn't allowed", () => {
      expect(() => new Track(mockResource("geoxor_logo.svg"))).toThrow();
    });
  });

  describe.concurrent("track.getFilename()", () => {
    it("should return the filename", async () => {
      expect(track.getFilename()).toBe("KOAN Sound & Asa - Starlite.flac");
    });
  });

  describe.concurrent("track.getTitleFormatted()", () => {
    it("should return the title if exists", async () => {
      expect(track.getTitleFormatted()).toBe("Starlite");
    });

    it("should return the filename if there's no title in the metadata", async () => {
      const track = new Track(mockResource("no-metadata.flac"));
      await track.fetchAsyncData();
      expect(track.getTitleFormatted()).toBe("no-metadata.flac");
    });
  });

  describe.concurrent("track.getArtistsFormatted()", () => {
    it("should return the artists if exists", async () => {
      const track = new Track(mockResource("KOAN Sound - Traverse.flac"));
      await track.fetchAsyncData();
      expect(track.getArtistsFormatted()).toBe("KOAN Sound");
    });

    it("should combined multiple artists with &", async () => {
      expect(track.getArtistsFormatted()).toBe("KOAN Sound & Asa");
    });

    it("should be undefined if there is no artists in the metadata", async () => {
      const track = new Track(mockResource("no-metadata.flac"));
      await track.fetchAsyncData();
      expect(track.getArtistsFormatted()).toBeUndefined();
    });
  });

  describe.concurrent("track.getDurationSeconds()", () => {
    it("should return the duration in seconds", async () => {
      const track = new Track(mockResource("House - Zenith v1.mp3"));
      await track.fetchAsyncData();
      const seconds = ~~track.getDurationSeconds();
      // Linux vs Windows oddities
      expect( seconds == 14 || seconds == 15).toBeTruthy();
    });

    it("should return 0 if it has no metadata", async () => {
      const track = new Track(mockResource("no-metadata.flac"));
      await track.fetchAsyncData();
      // @ts-ignore
      track.metadata.data!.format.duration = undefined;
      expect(~~track.getDurationSeconds()).toBe(0);
    });
  });

  describe.concurrent("track.getDurationFormatted()", () => {
    it("should return the duration in a formatted string", async () => {
      const track = new Track(mockResource("House - Zenith v1.mp3"));
      await track.fetchAsyncData();
      const duration = track.getDurationFormatted();
      // Linux vs Windows oddities
      expect(duration == "0:14" || duration == "0:15").toBeTruthy();
    });
  });
});