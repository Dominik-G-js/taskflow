import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useCreateTask } from "../hooks/useCreateTask";
import { Button } from "../services/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../services/components/ui/form";
import { Input } from "../services/components/ui/input";

const formSchema = z.object({
  title: z.string().min(3, "Název musí mít alespoň 3 znaky."),
});

const AddTaskForm = () => {
  const { mutate, isPending } = useCreateTask();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start space-x-4 mb-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel>Nový úkol</FormLabel>
              <FormControl>
                <Input placeholder="Co je potřeba udělat?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? 'Přidávám...' : 'Přidat úkol'}
        </Button>
      </form>
    </Form>
  );
};

export default AddTaskForm;