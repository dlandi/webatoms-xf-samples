import Bind from "@web-atoms/core/dist/core/Bind";
import XNode, { RootObject } from "@web-atoms/core/dist/core/XNode";
import WA from "@web-atoms/xf-controls/dist/clr/WA";
import X from "@web-atoms/xf-controls/dist/clr/X";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import SimpleFormViewModel from "../simple/SimpleFormViewModel";

export default class CustomForm extends AtomXFContentPage {

    public viewModel: SimpleFormViewModel;

    public create() {

        this.viewModel = this.resolve(SimpleFormViewModel);

        this.render(<XF.ContentPage title="Simple Form" padding="10">
            <WA.AtomForm>
            <WA.AtomForm.fieldStyle>
                <XF.ControlTemplate>
                    <XF.Grid>
                        <XF.Grid.rowDefinitions>
                            <XF.RowDefinition height="Auto"/>
                            <XF.RowDefinition/>
                            <XF.RowDefinition height="Auto"/>
                        </XF.Grid.rowDefinitions>
                        <XF.Label
                            text={X.TemplateBinding("Label")}
                            textColor="Green"
                            />
                        <XF.ContentPresenter
                            { ... XF.Grid.row(1)}
                            />
                    </XF.Grid>
                </XF.ControlTemplate>
            </WA.AtomForm.fieldStyle>
            <WA.AtomField
                    label="Username:"
                    isRequired={true}
                    error={Bind.oneWay(() => this.viewModel.errorUsername)}>
                    <XF.Entry text={Bind.twoWays(() => this.viewModel.model.username)}/>
                </WA.AtomField>
                <WA.AtomField
                    label="Password"
                    isRequired={true}
                    error={Bind.oneWay(() => this.viewModel.errorPassword)}
                    >
                    <XF.Entry
                        isPassword={true}
                        text={Bind.twoWays(() => this.viewModel.model.password)}
                    />
                </WA.AtomField>
                <XF.Button
                    command={Bind.event((s, e) => this.viewModel.signup())}
                    text="Signup"/>
            </WA.AtomForm>
        </XF.ContentPage>);
    }

}
