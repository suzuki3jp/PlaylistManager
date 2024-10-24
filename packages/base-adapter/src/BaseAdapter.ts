import type { Result } from "@playlistmanager/result";
import type { BaseAdapterError } from "./BaseAdapterError";
import type { FullPlaylist, Playlist } from "./entities";

export abstract class BaseAdapter {
	abstract getPlaylists(
		userId: string,
		accessToken: string,
	): Result<Playlist[], BaseAdapterError>;

	abstract getPlaylist(
		playlistId: string,
		accessToken: string,
	): Result<Playlist, BaseAdapterError>;

	abstract getFullPlaylist(
		playlistId: string,
		accessToken: string,
	): Result<FullPlaylist, BaseAdapterError>;
}
