// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Uri } from 'vscode';

import { encodeText} from './utils';



// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.saveSnippet', async () => {
		// The code you place here will be executed every time your command is executed

		const editor = vscode.window.activeTextEditor;
		if (editor) {
			// Display a message box to the user
			let selectedText = editor?.document.getText(editor.selection);		
			if(!selectedText) {
				vscode.window.showErrorMessage('Please select text snippet before saving');
				return;
			}	
			console.log('selectedText before encoding: ', selectedText);
			selectedText = encodeText(selectedText);

			// User Input to name saved snippet
			let title = await vscode.window.showInputBox({
				placeHolder: "Name your snippet",
				prompt: "Snippet title"
			});
			if(title !== undefined){
				if(title === ''){
					vscode.window.showErrorMessage('A title for the snippet is mandatory!');
				} else {
					title = encodeText(title);
					const tags = vscode.window.activeTextEditor?.document.languageId;
					const sourceUrl = vscode.window.activeTextEditor?.document.fileName;
					const newSnippetUrl = `https://www.codever.land/my-snippets/new?code=${selectedText}&title=${title}&tags=${tags}&sourceUrl=${sourceUrl}&ext=vscode`;					
					const newSnippetUri = Uri.parse(newSnippetUrl);
					vscode.env.openExternal(newSnippetUri);
				} 
			}
		}

	});

	let disposable2 = vscode.commands.registerCommand('extension.searchSnippet', async () => {
		
		const editor = vscode.window.activeTextEditor;
		const selectedText = editor?.document.getText(editor.selection);

		// The code you place here will be executed every time your command is executed
		const searchQuery = await vscode.window.showInputBox({
			placeHolder: "Search query",
			prompt: "Search my snippets on Codever",
			value: selectedText
		});
		if(searchQuery === ''){
			console.log(searchQuery);
			vscode.window.showErrorMessage('A search query is mandatory to execute this action');
		} 

		if(searchQuery !== undefined){
			const searchUrl = `https://www.codever.land/search?q=${searchQuery}&sd=my-snippets`;
			vscode.env.openExternal(Uri.parse(searchUrl));		
		}
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

// this method is called when your extension is deactivated
export function deactivate() {}
