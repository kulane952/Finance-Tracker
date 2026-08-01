import {
useState
} from "react";

import {
Button
} from "@/components/ui/button";

import {
Dialog,
DialogContent,
DialogHeader,
DialogTitle,
DialogTrigger
}
from "@/components/ui/dialog";

import TransactionForm from "./TransactionForm";

export default function AddTransactionDialog(){

const [open,setOpen]=useState(false);

return (

<Dialog
open={open}
onOpenChange={setOpen}
>

<DialogTrigger
render={
<Button>
+ Add Transaction
</Button>
}
/>

<DialogContent>

<DialogHeader>

<DialogTitle>
Add Transaction
</DialogTitle>

</DialogHeader>

<TransactionForm
close={()=>setOpen(false)}
/>

</DialogContent>

</Dialog>

);

}