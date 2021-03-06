import Bind from "@web-atoms/core/dist/core/Bind";
import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import FontAwesomeRegular from "@web-atoms/font-awesome/dist/FontAwesomeRegular";
import FontAwesomeSolid from "@web-atoms/font-awesome/dist/FontAwesomeSolid";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import AtomXFToggleButtonBar from "@web-atoms/xf-controls/dist/toggle-button-bar/AtomXFToggleButtonBar";
import ToggleButtonBarViewModel from "../simple/ToggleButtonBarViewModel";

export default class CustomToggleButtonBar extends AtomXFContentPage {

    public viewModel: ToggleButtonBarViewModel;

    public create() {

        this.viewModel = this.resolve(ToggleButtonBarViewModel);

        this.render(
            <XF.ContentPage title="Custom Toggle Button Bar">
                <XF.StackLayout>
                    <AtomXFToggleButtonBar
                        items={this.viewModel.genderList}
                        value={Bind.twoWays(() => this.viewModel.gender)}>
                        <AtomXFToggleButtonBar.itemTemplate>
                            <XF.DataTemplate>
                                <XF.Label
                                    padding={10}
                                    fontSize={30}
                                    fontFamily={FontAwesomeSolid.toString()}
                                    text={Bind.oneTime((x) =>
                                        /female/i.test(x.data.value)
                                        ? FontAwesomeSolid.female
                                        : FontAwesomeSolid.male )}
                                    textColor={Bind.oneWay((x) => x.data === x.localViewModel.owner.selectedItem
                                        ? Colors.white
                                        : Colors.black )}
                                    backgroundColor={Bind.oneWay((x) => x.data !== x.localViewModel.owner.selectedItem
                                        ? Colors.white
                                        : Colors.black )}
                                    />
                            </XF.DataTemplate>
                        </AtomXFToggleButtonBar.itemTemplate>
                    </AtomXFToggleButtonBar>
                    <XF.Label
                        text={Bind.oneWay(() => `Selected gender is ${this.viewModel.gender}`)}
                        />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }

}
