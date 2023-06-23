import TextConst from "../constants/TextConst"

export default function Register(params) {

    return (
        <View>
            <Text>{TextConst.REGISTER}</Text>

            <Text>{TextConst.NAME}</Text>
            <CustomTextInput />

            <Text>{TextConst.EMAIL}</Text>
            <CustomTextInput />

            <Text>{TextConst.PHONE}</Text>
            <CustomTextInput />

            <Text>{TextConst.PASSWORD}</Text>
            <CustomTextInput />

            <PrimaryButton text={TextConst.REGISTER} onPress={{}}>
            </PrimaryButton>
        </View>
    )
};
