type ButtonProps = { // Defines the shape of the properties for the Button component
buttonText: string;
disabled: boolean;
}

export default function Button(props: ButtonProps){
  return (
    <button disabled={props.disabled}>{props.buttonText}</button>
  );
}