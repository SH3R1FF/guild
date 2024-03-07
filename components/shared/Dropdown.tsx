import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
type DropDownProps = {
    value?: string
    onChangeHandler?: () => void;
}

const Dropdown = ({value,onChangeHandler}: DropDownProps) => {

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Web Development</SelectItem>
            <SelectItem value="dark">UI/UX</SelectItem>
            <SelectItem value="system">Artificial Intelligence</SelectItem>
        </SelectContent>
    </Select>

  )
}

export default Dropdown