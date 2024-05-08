import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
export default async function MealPage() {
  return (
    <>
      <header className={classes.header}>
        Delicious meals, created by you.
        <p>Choose your favorite meals.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe!</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
