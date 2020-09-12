import AtomXFContentPage from "@web-atoms/xf-controls/dist/pages/AtomXFContentPage";
import XF from "@web-atoms/xf-controls/dist/clr/XF";
import XNode from "@web-atoms/core/dist/core/XNode";

export default class XFFurniture extends AtomXFContentPage {
    public create() {

        this.render(
            <XF.ContentPage>
            {/* <XF.ScrollView>
        <XF.Grid margin="20,30,0,20" rowDefinitions="auto, auto, 95, auto, auto, *">
            <XF.Grid
                {...XF.Grid.row(0)} Grid.Row="0"
                ColumnDefinitions="*, auto, auto"
                ColumnSpacing="30">
                <XF.StackLayout {...XF.Grid.column(0)} Grid.Column="0">
                    <XF.BoxView
                        BackgroundColor="{StaticResource colorBlack}"
                        CornerRadius="3"
                        HeightRequest="3"
                        HorizontalOptions="Start"
                        WidthRequest="25" />
                    <BoxView
                        BackgroundColor="{StaticResource colorBlack}"
                        CornerRadius="3"
                        HeightRequest="3"
                        HorizontalOptions="Start"
                        WidthRequest="25" />
                </StackLayout>
                <Path
                    Grid.Column="1"
                    Data="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                    Fill="{StaticResource colorBlue232}"
                    HeightRequest="30"
                    WidthRequest="30" />
                <Image
                    Grid.Column="2"
                    Margin="0,0,20,0"
                    Aspect="AspectFit"
                    HeightRequest="22"
                    Source="cart"
                    WidthRequest="22" />
                <BoxView
                    Grid.Column="2"
                    Margin="0,4,16,0"
                    BackgroundColor="{StaticResource colorRedFF}"
                    CornerRadius="4"
                    HeightRequest="8"
                    HorizontalOptions="End"
                    VerticalOptions="Start"
                    WidthRequest="8" />
            </Grid>
            <StackLayout
                Grid.Row="1"
                Margin="0,20,0,0"
                Spacing="0">
                <Label
                    FontFamily="FontMontserratBold"
                    FontSize="30"
                    Text="Explore" />
                <Label FontSize="10" Text="category" />
            </StackLayout>
            <CollectionView
                x:Name="listCategories"
                Grid.Row="2"
                HorizontalScrollBarVisibility="Never"
                ItemsSource="{Binding Categories}"
                SelectionMode="None">
                <CollectionView.ItemsLayout>
                    <LinearItemsLayout ItemSpacing="5" Orientation="Horizontal" />
                </CollectionView.ItemsLayout>
                <CollectionView.ItemTemplate>
                    <DataTemplate>
                        <Grid>
                            <shadows:Shadows CornerRadius="38" Shades="{shadows:SingleShade BlurRadius=10, Offset='0,8', Opacity=0.5, Color={StaticResource colorYellow99F4}}">
                                <pancake:PancakeView
                                    Margin="0,5,5,5"
                                    Padding="8"
                                    BackgroundColor="{Binding backgroundColor}"
                                    CornerRadius="34"
                                    HeightRequest="50"
                                    VerticalOptions="Start"
                                    WidthRequest="135">
                                    <Grid
                                        ColumnDefinitions="auto, *"
                                        RowSpacing="0"
                                        VerticalOptions="Center">
                                        <BoxView
                                            BackgroundColor="{StaticResource colorWhite}"
                                            CornerRadius="25"
                                            HeightRequest="50"
                                            WidthRequest="50" />
                                        <Image
                                            Grid.Column="0"
                                            HeightRequest="34"
                                            HorizontalOptions="Center"
                                            Source="{Binding image}"
                                            VerticalOptions="CenterAndExpand"
                                            WidthRequest="34" />
                                        <StackLayout
                                            Grid.Row="0"
                                            Grid.Column="1"
                                            Margin="2,0,0,0"
                                            Spacing="0"
                                            VerticalOptions="Center">
                                            <Label
                                                FontFamily="FontMontserratMedium"
                                                FontSize="16"
                                                Text="{Binding description}"
                                                TextColor="{Binding textColor}"
                                                VerticalOptions="Start" />
                                            <Label
                                                FontSize="9"
                                                Text="{Binding numberItems, StringFormat='{0} items'}"
                                                VerticalOptions="Start" />
                                        </StackLayout>
                                    </Grid>
                                    <pancake:PancakeView.GestureRecognizers>
                                        <TapGestureRecognizer
                                            Command="{Binding Path=BindingContext.SelectCategoryCommand, Source={x:Reference listCategories}}"
                                            CommandParameter="{Binding .}"
                                            NumberOfTapsRequired="1" />
                                    </pancake:PancakeView.GestureRecognizers>
                                </pancake:PancakeView>
                                <shadows:Shadows.Triggers>
                                    <DataTrigger
                                        Binding="{Binding selected}"
                                        TargetType="shadows:Shadows"
                                        Value="False">
                                        <Setter Property="Shades" Value="{shadows:SingleShade BlurRadius=0, Offset='0,0', Opacity=0}" />
                                    </DataTrigger>
                                </shadows:Shadows.Triggers>
                            </shadows:Shadows>
                        </Grid>
                    </DataTemplate>
                </CollectionView.ItemTemplate>
            </CollectionView>
            <Grid Grid.Row="3" Margin="{OnPlatform Android='0,20,20,20', iOS='0,20,20,0'}">
                <pancake:PancakeView
                    Padding="15"
                    BackgroundColor="{StaticResource colorBlack27}"
                    CornerRadius="10"
                    HasShadow="False"
                    VerticalOptions="Start">
                    <Grid RowDefinitions="auto, auto, auto">
                        <Label
                            Grid.Row="0"
                            FontSize="Micro"
                            Text="Black Friday"
                            TextColor="{StaticResource colorGrayC1}" />
                        <Label
                            Grid.Row="1"
                            Margin="0,-8,0,2"
                            VerticalTextAlignment="Center">
                            <Label.FormattedText>
                                <FormattedString>
                                    <Span
                                        FontFamily="FontMontserratSemiBold"
                                        FontSize="{OnPlatform Android='14',
                                                              iOS='18'}"
                                        Text="Sale Up to"
                                        TextColor="{StaticResource colorWhite}" />
                                    <Span
                                        FontFamily="FontMontserratSemiBold"
                                        FontSize="{OnPlatform Android='18',
                                                              iOS='24'}"
                                        Text=" 70% "
                                        TextColor="{StaticResource colorYellowF4}" />
                                    <Span
                                        FontFamily="FontMontserratSemiBold"
                                        FontSize="{OnPlatform Android='14',
                                                              iOS='18'}"
                                        Text="Off"
                                        TextColor="{StaticResource colorWhite}" />
                                </FormattedString>
                            </Label.FormattedText>
                        </Label>
                        <pancake:PancakeView
                            Grid.Row="2"
                            Padding="15,5"
                            BackgroundColor="{StaticResource colorWhite}"
                            CornerRadius="4"
                            HasShadow="False"
                            HorizontalOptions="Start"
                            VerticalOptions="Center">
                            <Label
                                FontSize="8"
                                HorizontalOptions="Center"
                                Text="SHOP NOW"
                                VerticalOptions="Center" />
                        </pancake:PancakeView>
                    </Grid>
                </pancake:PancakeView>
                <Image
                    Margin="{OnPlatform Android='0,-45,-25,0',
                                        iOS='0,-90,-60,0'}"
                    HeightRequest="{OnPlatform Android='150',
                                               iOS='235'}"
                    HorizontalOptions="End"
                    Source="chair"
                    WidthRequest="{OnPlatform Android='200',
                                              iOS='290'}" />
            </Grid>
            <Label
                Grid.Row="4"
                FontFamily="FontMontserratBold"
                FontSize="{OnPlatform Android='18',
                                      iOS='24'}"
                Text="Best Seller" />
            <Label
                Grid.Row="4"
                Margin="0,0,35,0"
                FontFamily="FontMontserratMedium"
                FontSize="{OnPlatform Android='10',
                                      iOS='12'}"
                HorizontalOptions="End"
                Text="Show All"
                TextColor="{StaticResource colorRedFF}"
                VerticalTextAlignment="Center" />
            <Polygon
                Grid.Row="4"
                Margin="{OnPlatform Android='0,-2,20,0',
                                    iOS='0,0,20,0'}"
                Fill="{StaticResource colorRedFF}"
                HorizontalOptions="End"
                Points="10,10 20,15 10,20"
                StrokeThickness="1" />
            <CollectionView
                x:Name="listProducts"
                Grid.Row="5"
                Margin="0,15,20,0"
                ItemsSource="{Binding Products}"
                VerticalScrollBarVisibility="Never">
                <CollectionView.ItemsLayout>
                    <GridItemsLayout
                        HorizontalItemSpacing="15"
                        Orientation="Vertical"
                        Span="2"
                        VerticalItemSpacing="15" />
                </CollectionView.ItemsLayout>
                <CollectionView.ItemTemplate>
                    <DataTemplate>
                        <Grid>
                            <pancake:PancakeView
                                Padding="0,0,0,10"
                                BackgroundColor="{StaticResource colorGrayF6}"
                                CornerRadius="12"
                                HasShadow="False">
                                <Grid RowDefinitions="auto, auto, auto, auto, auto" RowSpacing="0">
                                    <Image
                                        Margin="0,15,20,0"
                                        Aspect="AspectFit"
                                        HeightRequest="18"
                                        HorizontalOptions="End"
                                        Source="heart_outline"
                                        VerticalOptions="Start"
                                        WidthRequest="18">
                                        <Image.Triggers>
                                            <DataTrigger
                                                Binding="{Binding favorite}"
                                                TargetType="Image"
                                                Value="True">
                                                <Setter Property="Source" Value="heart" />
                                            </DataTrigger>
                                        </Image.Triggers>
                                    </Image>
                                    <pancake:PancakeView
                                        Padding="2,4"
                                        BackgroundColor="{StaticResource colorRedFF}"
                                        CornerRadius="12,0,0,20"
                                        HasShadow="False"
                                        HeightRequest="20"
                                        HorizontalOptions="Start"
                                        VerticalOptions="Start"
                                        WidthRequest="30">
                                        <Label HorizontalOptions="Center">
                                            <Label.FormattedText>
                                                <FormattedString>
                                                    <Span
                                                        FontFamily="FontMontserratSemiBold"
                                                        FontSize="8"
                                                        Text="{Binding discount, StringFormat='{0:N0}%'}"
                                                        TextColor="{StaticResource colorWhite}" />
                                                    <Span
                                                        FontFamily="FontMontserratSemiBold"
                                                        FontSize="8"
                                                        Text="&#10;OFF"
                                                        TextColor="{StaticResource colorWhite}" />
                                                </FormattedString>
                                            </Label.FormattedText>
                                        </Label>
                                        <pancake:PancakeView.Triggers>
                                            <XF.DataTrigger
                                                Binding="{Binding discount}"
                                                TargetType="pancake:PancakeView"
                                                Value="0">
                                                <Setter Property="IsVisible" Value="False" />
                                            </DataTrigger>
                                        </pancake:PancakeView.Triggers>
                                    </pancake:PancakeView>
                                    <XF.Image
                                        Grid.Row="0"
                                        Margin="0,25,0,0"
                                        Aspect="AspectFit"
                                        HeightRequest="120"
                                        Source="{Binding image}" />
                                    <XF.Label
                                        Grid.Row="1"
                                        Margin="10,0"
                                        FontFamily="FontMontserratSemiBold"
                                        FontSize="16"
                                        HorizontalTextAlignment="Center"
                                        LineBreakMode="TailTruncation"
                                        Text="{Binding description}" />
                                    <XF.StackLayout
                                        Grid.Row="2"
                                        HorizontalOptions="Center"
                                        Orientation="Horizontal"
                                        Spacing="2">
                                        <XF.Image
                                            Aspect="AspectFit"
                                            HeightRequest="8"
                                            HorizontalOptions="Start"
                                            Source="star"
                                            WidthRequest="8" />
                                        <XF.Label
                                            FontSize="8"
                                            Text="{Binding rating, StringFormat='{0:N1}  |'}"
                                            TextColor="{StaticResource colorGray95}"
                                            VerticalTextAlignment="Center" />
                                        <XF.Label
                                            FontSize="8"
                                            Text="{Binding review, StringFormat=' {0} Review'}"
                                            TextColor="{StaticResource colorGray95}"
                                            VerticalTextAlignment="Center" />
                                    </XF.StackLayout>
                                    <XF.BoxView
                                        Grid.Row="3"
                                        Margin="0,10,0,5"
                                        BackgroundColor="{StaticResource colorGrayEA}"
                                        HeightRequest="1"
                                        HorizontalOptions="FillAndExpand" />
                                    <XF.StackLayout
                                        Grid.Row="4"
                                        HorizontalOptions="Center"
                                        Orientation="Horizontal">
                                        <XF.Label
                                            FontSize="10"
                                            Text="{Binding oldPrice, StringFormat='{0:G}'}"
                                            TextColor="{StaticResource colorGray95}"
                                            TextDecorations="Strikethrough"
                                            VerticalTextAlignment="Center">
                                            <XF.Label.Triggers>
                                                <XF.DataTrigger
                                                    Binding="{Binding oldPrice}"
                                                    TargetType="Label"
                                                    Value="0">
                                                    <XF.Setter Property="IsVisible" Value="False" />
                                                </XF.DataTrigger>
                                            </XF.Label.Triggers>
                                        </XF.Label>
                                        <XF.Label
                                            FontFamily="FontMontserratMedium"
                                            FontSize="16"
                                            HorizontalTextAlignment="Center"
                                            Text="{Binding newPrice, StringFormat='${0:G}'}"
                                            TextColor="{StaticResource colorRedFF}"
                                            VerticalTextAlignment="Center" />
                                    </XF.StackLayout>
                                </XF.Grid>
                                <pancake:PancakeView.GestureRecognizers>
                                    <TapGestureRecognizer
                                        Command="{Binding Path=BindingContext.NavigateToDetailPageCommand, Source={x:Reference listProducts}}"
                                        CommandParameter="{Binding .}"
                                        NumberOfTapsRequired="1" />
                                </pancake:PancakeView.GestureRecognizers>
                            </pancake:PancakeView>
                        </XF.Grid>
                    </XF.DataTemplate>
                </XF.CollectionView.itemTemplate>
            </XF.CollectionView>
        </XF.Grid>
    </XF.ScrollView> */}
    </XF.ContentPage>
        );
    }
}