import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (

        <>
            <SignIn 
                appearance={
                    {
                        layout: {
                            socialButtonsVariant:"iconButton",               
                        },
                        variables: {
                            colorBackground: 'rgb(30, 30, 30)',
                            colorPrimary: '',
                            colorText: 'white',
                            colorInputBackground: "#262626",
                            colorInputText: "white",  
                        }
                    }
            
                }
        />

    </>

    )
}