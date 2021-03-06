import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import EditorViewModel from "./EditorViewModel";

export default class EditorView extends AtomXFContentPage {
    public viewModel: EditorViewModel;

    public create() {
        this.viewModel = this.resolve(EditorViewModel);
        this.render(
            <XF.ContentPage title="Editor View Sample">
                <XF.StackLayout padding="10">
                    <XF.Label text="Address:"
                        textColor="Black"></XF.Label>
                    <XF.Editor
                        text={Bind.twoWays(() => this.viewModel.value)}
                        placeholder="Multi-line text editor"
                        AutoSize="TextChanges"
                        MaxLength="200"
                        IsSpellCheckEnabled="false"
                        IsTextPredictionEnabled="false">
                    </XF.Editor>
                    <XF.Label text={Bind.oneWay(() => `Address is ${this.viewModel.value}`)}
                        textColor="Maroon" />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}
