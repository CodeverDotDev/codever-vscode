# Codever Visual Studio Code Extension

Save and search snippets to [Codever](https://www.codever.land) from Visual Studio Code. You need to have a 
[registered account](https://www.codever.land/register) first.

> [Extensions](https://www.codever.land/howto) are available also for browsers and IntelliJ IDEs. See our [howto](https://www.codever.land/howto) guides
> to help you get started.

## Features

### Save snippets

Select snippet, then **right click** or **Ctrl+Shift+P** (**Cmd+Shift+P** on Mac) and select "Save snippet to Codever":

![Save snippet to Codever demo](https://i.ibb.co/hZS8vzx/codever-vscode-extension-save-snippet-800x457.gif)

### Search my snippets

**Right click** or **Ctrl+Shift+P** (**Cmd+Shift+P** on Mac) and select "Search my snippets on Codever":

![Search snippet to Codever demo](https://i.ibb.co/PTyNfGT/codever-vscode-extension-search-snippet-800x457.gif)

## Publish

Use [`vsce`](https://vscode-docs.readthedocs.io/en/latest/tools/vscecli/) to package and [publish](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) the extension:

```shell
vsce package
```
