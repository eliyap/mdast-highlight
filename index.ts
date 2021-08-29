import { PhrasingContent, Parent } from "mdast";
import { Extension as FromMarkdownExtension } from 'mdast-util-from-markdown';
import { Options as ToMarkdownExtension } from 'mdast-util-to-markdown';

declare module 'mdast' {
    interface StaticPhrasingContentMap {
        mark: Mark;
    }
}

export interface Mark extends Parent {
    type: 'mark';
    children: PhrasingContent[];
}

export const pandocMarkFromMarkdown: FromMarkdownExtension = {

}

export const pandocMarkToMarkdown: ToMarkdownExtension = {

}