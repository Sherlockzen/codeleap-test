export interface Resp {
    count: number
    next: string
    previous: any
    results: Result[]
}

export interface Result {
    id: number
    username: string
    created_datetime: string
    title: string
    content: string
}