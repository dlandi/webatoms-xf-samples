import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import DatePickerViewModel from "./DatePickerViewModel";

export default class DatePickerView extends AtomXFContentPage {

    public viewModel: DatePickerViewModel;

    public create() {
        this.viewModel = this.resolve(DatePickerViewModel);
        this.render(
            <XF.ContentPage>
                <XF.StackLayout>
                    <XF.DatePicker MinimumDate="01/01/2018"
                        MaximumDate="12/31/2018"
                        HorizontalOptions="Center"
                        verticalOptions="Center"
                        Date={Bind.twoWays(() => this.viewModel.date)} />
                    <XF.Label text={Bind.oneWay(() => this.viewModel.date)} />
                </XF.StackLayout>
            </XF.ContentPage>
        );
    }
}