import { PhrasingContent, Parent } from "mdast";
declare module 'mdast' {
    interface StaticPhrasingContentMap {
        mark: Mark;
    }
}
export interface Mark extends Parent {
    type: 'mark';
    children: PhrasingContent[];
}
