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
            <SelectItem value="web dev">Web Development</SelectItem>
            <SelectItem value="ui/ux">UI/UX</SelectItem>
            <SelectItem value="ai">Artificial Intelligence</SelectItem>
        </SelectContent>
    </Select>

  )
}

export default Dropdown