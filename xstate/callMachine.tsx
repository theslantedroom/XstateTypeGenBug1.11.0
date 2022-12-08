import type { StateFrom } from "xstate";
import { createMachine, assign, actions } from "xstate";

// user events

export interface Context {
  awaitAnswerText: string;
}

const defaultContext: Context = {
  awaitAnswerText: "Connecting",
};

export const callMachine = createMachine(
  {
    id: "call",
    tsTypes: {} as import("./callMachine.typegen").Typegen0,
    predictableActionArguments: true,
    preserveActionOrder: true,
    context: defaultContext,
    schema: {
      context: {} as Context,
      events: {} as { type: "RESET_CONTEXT" },
    },
    on: {
      RESET_CONTEXT: {
        actions: "resetContext",
        target: "getUserMedia",
      },
    },
    initial: "getUserMedia",
    states: {
      getUserMedia: {
        on: {
          RESET_CONTEXT: {
            target: "deviceCheck",
          },
        },
      },
      deviceCheck: {
        on: {
          RESET_CONTEXT: {
            target: "getUserMedia",
          },
        },
      },

      inCall: {
        on: {},
        type: "parallel",
        initial: "running",
        states: {
          localRecording: {
            initial: "false",
            states: {
              false: {
                on: {},
              },
              true: {
                on: {},
              },
            },
          },
          awaitingAnswerTimer: {
            initial: "running",
            states: {
              running: {
                entry: [],
                invoke: {
                  src: (context) => (cb) => {},
                },
              },
            },
          },
        },
      },
      leavingCall: {},
      error: {},
      gumError: {},
    },
  },
  {
    actions: {},
  }
);
