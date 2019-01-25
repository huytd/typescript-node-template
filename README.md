# TypeScript Node.js CLI Template

A template for building Node.js CLI applications with TypeScript. It's too simple to be published as a package, so don't ask. I don't even know if you're gonna use this or not.

In this template, we're building an application that has two main commands: `foo` and `bar`. And the `bar` command also has a subcommand called `blah`.

```
./app foo
./app bar
./app bar blah
```

---

The main idea behind this project is to give you the ability to build any sort of CLI applications from smaller building blocks called `Command`.

To create a `Command`, you'll create a class based on `BaseCommand` class, which has the following structure:

```javascript
class FooCommand extends BaseCommand {
    name: string = "<command name>";
    shortDescription: string = "<a one-line description>";
    
    run(args: string[]): void {
        ...
    }
}
```

The `name` field is the command name which you'll type to call. The `shortDescription` is the one line description of the command, which will be displayed in the help text.

If your command going to have subcommands, you'll need to add a `subCommands` field, it's an array of `Command`:

```javascript
subCommands: Command[] = [ new FooCommand(), new BarCommand() ];
```

And call `this.nextCommand(args)` whenever you're ready to move on for the next command.

If the command is unrecognized, the error message will be displayed along with the help text.
