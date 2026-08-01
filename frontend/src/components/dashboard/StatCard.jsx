export default function StatCard({
title,
value,
type
}){


return (

<div className="
rounded-2xl
border
bg-white
p-5
shadow-sm
">


<p className="
text-sm
text-muted-foreground
">

{title}

</p>



<h2
className={`
text-3xl
font-bold
mt-2

${
type==="income"
?
"text-green-600"
:
""
}

${
type==="expense"
?
"text-red-600"
:
""
}

${
type==="balance"
?
"text-blue-600"
:
""
}

`}
>

{value}

</h2>



</div>

)

}