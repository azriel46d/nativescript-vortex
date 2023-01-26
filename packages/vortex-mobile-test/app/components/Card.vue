<template>
    
    <GridLayout columns="auto" rows="auto, auto, auto" style="background: white;  border-top-left-radius: 30; border-top-right-radius: 30;width: 100%;">
        <Image :src="image" style="width:100%;" />
        <Label :text="title " style="color:black; font-size:20; padding:30;" row="1" />
        <Label :text="description" style="color:#464646; font-size:10; padding: 30; padding-top: 0; width: 100%;" row="2" :textWrap="true" />
    </GridLayout>
</template>

<script >
export default {
    props: ['title', 'image', 'description'],
}
</script>