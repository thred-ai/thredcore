import { App } from "../general/app.model"


export class User{

  name!: string
  id!: string
  url!: string
  apps!: App[]
  date!: number
  email!: string
  registeredWallets!: string[]

  constructor(name: string, id: string, apps: App[], date: number, url: string, email: string, registeredWallets: string[]){
    this.name = name ?? "New"
    this.id = id
    this.apps = apps ?? []
    this.date = date ?? 3
    this.url = url
    this.email = email
    this.registeredWallets = registeredWallets ?? []
  }
}