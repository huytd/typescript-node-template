import { Maybe, Command, BaseCommand } from './commands';

const ARGS: string[] = process.argv.splice(2);

class FooCommand extends BaseCommand {
    name: string = "foo";
    shortDescription: string = "the quick brown fox jumps";

    run(args: string[]): void { }
}

class BlahCommand extends BaseCommand {
    name: string = "blah";
    shortDescription: string = "bah bah black sheep have you any wool?";

    run(args: string[]): void { }
}

class BarCommand extends BaseCommand {
    name: string = "bar";
    shortDescription: string = "over the lazy dog";
    subCommands: Command[] = [ new BlahCommand() ];

    run(args: string[]): void {
        this.nextCommand(args);
    }
}

class MainCommand extends BaseCommand {
    name: string = "main";
    subCommands: Command[] = [ new FooCommand(), new BarCommand() ];

    run(args: string[]): void {
        this.nextCommand(args);
    }
}

const app = new MainCommand();
app.run(ARGS);
