export class App {
  id!: string;
  name!: string;
  creatorName?: string;
  displayUrl!: string;
  coverUrl?: string;
  description?: string;
  available!: boolean;
  loadURL?: string | undefined;
  defaultChain?: number

  constructor(
    id?: string,
    name?: string,
    creatorName?: string,
    displayUrl?: string,
    description?: string,
    available?: boolean,
    coverUrl?: string,
    loadURL?: string,
    defaultChain?: number
  ) {
    this.id = id ?? `${new Date().getTime()}`
    this.creatorName = creatorName ?? "Unknown Developer";
    this.name = name ?? "My App";
    this.displayUrl = displayUrl ?? "add_thred_default_later";
    this.description = description ?? "No Description Available";
    this.available = available ?? false;
    this.coverUrl = coverUrl ?? undefined;
    this.loadURL = loadURL ?? undefined;
    this.defaultChain = defaultChain ?? 1
  }
}
