export type Maybe<T> = T | null;

export interface Command {
    name: string;
    subCommands: Command[];
    shortDescription: string;
    run(args: string[]): void;
    findCommand(name: string): Maybe<Command>;
    nextCommand(args: string[]): void;
    displayDescription(): void;
}

export class BaseCommand implements Command {
    name: string;
    subCommands: Command[];
    shortDescription: string;

    run(args: string[]): void { }

    findCommand(name: string): Maybe<Command> {
        for (const c of this.subCommands) {
            if (c.name === name) {
                return c;
            }
        }
        return null;
    }

    nextCommand(args: string[]): void {
        if (args && args.length) {
            if (this.subCommands && this.subCommands.length) {
                const next: Maybe<Command> = this.findCommand(args[0]);
                if (next) {
                    return next.run(args.splice(1));
                } else {
                    console.log(`'${args[0]}' is not a recognized command.\n`);
                }
            }
        }
        this.displayDescription();
    }

    displayDescription(): void {
        const commands = this.subCommands.map(c => `- ${c.name}: ${c.shortDescription}`).join("\n");
        console.log(`List of available commands:\n${commands}`);
    }
}
