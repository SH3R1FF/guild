"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryFilter = () => {

    const [categories, setCategories] = useState<ICategory[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[])
    }

    getCategories();
  }, [])

  const onSelectCategory = (category: string) => {
      let newUrl = '';

      if(category && category !== 'All') {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'category',
          value: category
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['category']
        })
      }

      router.push(newUrl, { scroll: false });
  }


    return (
        <Select onValueChange={(value: string) => onSelectCategory(value)}>
        <SelectTrigger className="w-full bg-grey-50 h-[54px] rounded-full p-regular-16 px-5 py-3 dark:border-none dark:focus-visible:ring-black focus:ring-black dark:bg-neutral-900/90 dark:placeholder:text-grey-500 dark:text-grey-500 focus-visible:ring-offset-0">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="dark:bg-neutral-900 dark:border-none">
            <SelectItem value="All" className="select-item p-regular-14 dark:text-neutral-300">All</SelectItem>

            {categories.map((category) => (
            <SelectItem value={category.name} key={category._id} className="select-item p-regular-14 dark:text-neutral-300">
                {category.name}
            </SelectItem>
            ))}
        </SelectContent>
        </Select>
  )
}

export default CategoryFilter