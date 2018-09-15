import * as React from 'react';

export interface ISearchBarProps {
  searchValue: string;
}

export default class SearchBar extends React.Component<ISearchBarProps, any> {

  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  public onChange(event: React.ChangeEvent) {
    const { value } = (event.target as HTMLInputElement);
    this.setState({
      searchValue: value
    });
  }

  public render() {
    return (
      <div className='searchbar'>
        <input
          onChange={this.onChange}
          placeholder='Search Recipe...'
          value={this.state.searchValue}
          spellCheck={false}
        />
        <span className='searchbar-highlight'>
          {this.state.searchValue.replace(/ /g, "\u00a0")}
        </span>
      </div>
    );
  }
}
