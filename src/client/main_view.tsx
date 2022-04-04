
import * as React from "react";
import "./main_view.scss";
import { observable, action, runInAction } from "mobx";
import { observer } from "mobx-react";
import { Server, src } from "./utilities";
 
export interface MainViewProps {
    background: string;
}

@observer
export default class MainView extends React.Component<MainViewProps> {
    @observable private counter = 0;
    @observable private resolvedBackgroundColor?: string;
    private get backgroundColor() {
        return this.props.background;
    }

    render() {
        const { backgroundColor } = this;
        return (
            <div
                className={"main-container"}
                style={{ background: backgroundColor }}
            >
                <span className={"welcome"}>Hello World!</span>
            </div>
        );
    }

}