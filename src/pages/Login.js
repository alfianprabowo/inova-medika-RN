import CustomTextInput from "../components/CustomTextInput"
import PrimaryButton from "../components/PrimaryButton"
import SecondaryButton from "../components/SecondaryButton"
import TextConst from "../constants/TextConst"

export default function Login() {

    return (
        <View>
            <Text>{TextConst.LOGIN}</Text>

            <Text>{TextConst.EMAIL}</Text>
            <CustomTextInput />

            <Text>{TextConst.PASSWORD}</Text>
            <CustomTextInput />

            <PrimaryButton text={TextConst.LOGIN} onPress={{}}>
            </PrimaryButton>

            <SecondaryButton text={TextConst.REGISTER} onPress={{}}>
            </SecondaryButton>
        </View>
    )

};
