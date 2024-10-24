export class PlaylistItem {
	private id: string;
	private title: string;
	private thumbnailUrl: string;
	private position: number;

	constructor(data: PlaylistItemData) {
		const { id, title, thumbnailUrl, position } = data;
		this.id = id;
		this.title = title;
		this.thumbnailUrl = thumbnailUrl;
		this.position = position;
	}

	get getId(): string {
		return this.id;
	}

	get getTitle(): string {
		return this.title;
	}

	get getThumbnailUrl(): string {
		return this.thumbnailUrl;
	}

	get getPosition(): number {
		return this.position;
	}
}

export interface PlaylistItemData {
	id: string;
	title: string;
	thumbnailUrl: string;
	position: number;
}
