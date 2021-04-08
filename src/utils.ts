/**
 This is needed because "vscode.env.openExternal(newSnippetUri);"  does not encode properly "&" and "?"
*/
export function encodeText(s: string): string {        
    let response  = s.replace(/\&/gi, 'ampc;');
    response = response.replace(/\?/gi, 'qmc;');
    response = response.replace(/\#/gi, 'hashc;');
    return encodeURIComponent(response);
}
