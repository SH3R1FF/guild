import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";
import { createCategory, getAllCategories } from "@/lib/actions/category.actions";

type DropdownProps = {
  value?: string;
  onChangeHandler?: (value: string) => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddCategory = async () => {
    if (newCategory.trim() === "") return;

    try {
      const category = await createCategory({
        categoryName: newCategory.trim(),
      });

      if (category) {
        setCategories((prevState) => [...prevState, category]);
        setNewCategory(""); // Clear input after adding
      }
    } catch (error) {
      console.error("Failed to add category", error);
    } finally {
      handleDialogClose(); // Close dialog after adding
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();
      if (categoryList) setCategories(categoryList as ICategory[]);
    };

    getCategories();
  }, []);

  // Close the dialog and reload the page
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setNewCategory(""); // Clear the new category name

    // Reload the page after closing the dialog
    window.location.reload();
  };

  return (
    <div>
      <Select onValueChange={(value) => onChangeHandler?.(value)} defaultValue={value}>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="dark:bg-neutral-900 dark:border-none">
          {categories.length > 0 &&
            categories.map((category) => (
              <SelectItem
                key={category._id}
                value={category._id}
                className="select-item p-regular-14 dark:text-neutral-300"
              >
                {category.name}
              </SelectItem>
            ))}

          <div
            className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 dark:hover:bg-neutral-800 focus:text-primary-500 cursor-pointer"
            onClick={() => setIsDialogOpen(true)}
          >
            Add new category
          </div>
        </SelectContent>
      </Select>

      <AlertDialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <AlertDialogContent className="bg-white dark:bg-neutral-900 dark:border-neutral-800">
          <AlertDialogHeader>
            <AlertDialogTitle>New Category</AlertDialogTitle>
            <AlertDialogDescription>
              <Input
                type="text"
                placeholder="Category name"
                className="bg-grey-50 dark:bg-neutral-900/90 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 focus-visible:ring-neutral-900 dark:border dark:border-neutral-700 mt-3"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                autoFocus
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="dark:bg-neutral-900 dark:border-neutral-800"
              onClick={handleDialogClose}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleAddCategory}
              className="bg-[radial-gradient(100%_100%_at_top_left,#624cf5,#3634c7,#624cf5)] text-white px-8"
            >
              Add
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dropdown;
