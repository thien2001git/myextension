import * as vscode from 'vscode';
import * as upperCase from './upperCase';
import * as lowerCase from './lowerCase';
import * as listFiles from './listFiles';
import * as removeVietnameseTones from './removeVietnameseTones';
import * as toContant from './toContant';
import * as toVariable from './toVariable';


export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "myextension" is now active!');

	context.subscriptions.push(listFiles.disposable);
	context.subscriptions.push(upperCase.disposable);
	context.subscriptions.push(lowerCase.disposable);
	context.subscriptions.push(removeVietnameseTones.disposable);
	context.subscriptions.push(toContant.disposable);
	context.subscriptions.push(toVariable.disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
