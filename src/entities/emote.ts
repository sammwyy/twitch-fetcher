import Provider from "./provider";

export default interface Emote {
    type: Provider;
    id: string;
    code: string;
    owner: string;
    url: {
        low: string;
        mid: string;
        high: string;
    }
}