import * as React from "react";
import Filters from "./filters/";
import Results from "./results/";
import Responses from "./db";
import Data from "./filters/data";
import { Survey } from "./typings";

interface Props {}

export interface SelectedAnswers {
  ageRange: {
    [x: string]: boolean;
  };
  characterGender: {
    [x: string]: boolean;
  };
  class: {
    [x: string]: boolean;
  };
  classComparison: {
    [x: string]: boolean;
  };
  contentInterest: {
    [x: string]: boolean;
  };
  expectedTimeTo60: {
    [x: string]: boolean;
  };
  faction: {
    [x: string]: boolean;
  };
  firstRetailExpansionPlayed: {
    [x: string]: boolean;
  };
  hasActiveSub: {
    [x: string]: boolean;
  };
  hasPlayedPrivateServer: {
    [x: string]: boolean;
  };
  mostRecentExpansionPlayed: {
    [x: string]: boolean;
  };
  prof60: {
    [x: string]: boolean;
  };
  profLeveling: {
    [x: string]: boolean;
  };
  race: {
    [x: string]: boolean;
  };
  region: {
    [x: string]: boolean;
  };
  responseDate: {
    [x: string]: boolean;
  };
  role: {
    [x: string]: boolean;
  };
  serverType: {
    [x: string]: boolean;
  };
}

interface State {
  activeFilters?: [keyof Survey.Response, Survey.AllAnswers[]][];
  answers: SelectedAnswers;
  computedResponses?: Survey.Response[];
  filtering: boolean;
  isMobile: boolean;
  isColorBlind: boolean;
  responses: Survey.Response[];
  showFilters: boolean;
}

export default class Wrapper extends React.Component<Props, State> {
  public displayName = "Wrapper";

  constructor(props: Props) {
    super(props);

    this.state = {
      answers: {
        ageRange: {},
        characterGender: {},
        class: {},
        classComparison: {},
        contentInterest: {},
        expectedTimeTo60: {},
        faction: {},
        firstRetailExpansionPlayed: {},
        hasActiveSub: {},
        hasPlayedPrivateServer: {},
        mostRecentExpansionPlayed: {},
        prof60: {},
        profLeveling: {},
        race: {},
        region: {},
        responseDate: {},
        role: {},
        serverType: {}
      },
      computedResponses: (Responses as Survey.Response[]) || [],
      filtering: false,
      isMobile: window.innerWidth < 480,
      isColorBlind: false,
      responses: (Responses as Survey.Response[]) || [],
      showFilters: window.innerWidth > 480
    };

    this.toggleAnswerFilter = this.toggleAnswerFilter.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  public render() {
    return (
      <div className="main-wrapper">
        {this.state.isMobile && (
          <button
            className="filters-toggle"
            onClick={() =>
              this.setState({ showFilters: !this.state.showFilters })
            }
          >
            {this.state.showFilters ? "Hide" : "Filters"}
          </button>
        )}

        {this.state.showFilters && (
          <Filters
            applyFilter={this.applyFilter}
            isColorBlind={this.state.isColorBlind}
            selectedAnswers={this.state.answers}
            toggleAnswer={this.toggleAnswerFilter}
            updateColorBlind={() =>
              this.setState({ isColorBlind: !this.state.isColorBlind })
            }
          />
        )}

        {this.state.computedResponses && (
          <Results
            activeFilters={this.state.activeFilters}
            allResponsesCount={this.state.responses.length}
            isColorBlind={this.state.isColorBlind}
            responses={this.state.computedResponses}
          />
        )}
      </div>
    );
  }

  applyFilter() {
    this.setState({ filtering: true }, () => {
      const { answers } = this.state;
      const questionsWithFilters = this.getFilters(answers);

      if (!questionsWithFilters.length) {
        return this.setState({
          filtering: false,
          computedResponses: this.state.responses
        });
      }

      const computedResponses = this.getFilteredResponses(
        (this.state.responses as Survey.Response[]) || [],
        questionsWithFilters
      );
      //   console.log(questionsWithFilters);
      //   console.log(computedResponses);

      this.setState({
        activeFilters: questionsWithFilters,
        filtering: false,
        computedResponses
      });
    });
  }

  getFilters(
    answers: SelectedAnswers
  ): [keyof Survey.Response, Survey.AllAnswers[]][] {
    return Object.entries(answers).reduce(
      (accum, [questionKey, selectedAnswers]) => {
        const filteredAnswers = Object.entries(selectedAnswers as {
          [x: string]: boolean;
        })
          .filter(([__, isSelected]) => isSelected)
          .map(([answer]) => answer);

        if (filteredAnswers.length) {
          // @ts-ignore
          return accum.concat([[questionKey, filteredAnswers]]);
        }

        return accum;
      },
      []
    );
  }

  getFilteredResponses(
    responses: Survey.Response[],
    filters: [keyof Survey.Response, Survey.AllAnswers[]][]
  ) {
    return responses.filter(response => {
      return filters.every(([questionKey, selectedAnswers]) => {
        return (selectedAnswers as string[]).some(selectedAnswer => {
          if (
            questionKey === "contentInterest" ||
            questionKey === "prof60" ||
            questionKey === "profLeveling"
          ) {
            // @ts-ignore
            return response[questionKey].includes(selectedAnswer);
          }

          return response[questionKey] === selectedAnswer;
        });
      });
    });
  }

  toggleAnswerFilter(
    answer: string,
    isSelected: boolean,
    type: keyof Survey.Response
  ) {
    const updatedSection = {
      ...this.state.answers[type],
      [answer]: !isSelected
    };

    this.setState({
      answers: { ...this.state.answers, [type]: updatedSection }
    });
  }
}
