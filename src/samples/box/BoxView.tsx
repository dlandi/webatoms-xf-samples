import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";

export default class BoxView extends AtomXFContentPage {

    public create() {
        this.render(
            <XF.ContentPage>
                <XF.BoxView color="CornflowerBlue"
                        cornerRadius="50"
                        widthRequest={160}
                        heightRequest={160}
                        verticalOptions="Center"
                        horizontalOptions="Center"/>

            </XF.ContentPage>
        );
    }
}
