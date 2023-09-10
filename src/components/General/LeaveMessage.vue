<template>
  <div class="container mx-auto px-4 lg:px-0 py-10 mt-10">
    <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Вы можете найти нас</h2>
    <div class="block lg:flex rounded-2xl bg-white dark:bg-darkBgColor text-blackColor dark:text-white">
      <div class="w-full lg:w-1/3">
        <iframe class="rounded-t-xl lg:rounded-tr-none lg:rounded-l-2xl"
                frameborder="0"
                height="649"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A8a9d23a8cc635bd099bc33d6ccc533d8d18c977c429689eaf69c699df8b5ee23&amp;source=constructor"
                width="100%"></iframe>
      </div>
      <div class="w-full lg:w-2/3 p-7 flex flex-col justify-center">
        <h3 class="text-2xl font-semibold mb-3">Оставьте нам сообщение</h3>
        <p class="text-sm mb-10">Оставьте заявку и мы перезвоним через 30 мин</p>
        <form action="">
          <div class="mb-4">
            <p class="mb-1">Email</p>
            <input class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white" placeholder="Введите email" type="text">
          </div>
          <div class="mb-4">
            <p class="mb-1">Имя</p>
            <input class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white" placeholder="Введите имя" type="text">
          </div>
          <div class="mb-4">
            <p class="mb-1">Телефон</p>
            <input class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white" placeholder="Введите телефон" type="text">
          </div>
          <div class="mb-4">
            <p class="mb-1">Примечание</p>
            <textarea class="py-2 pl-4 border border-solid border-[#D8D6DE] rounded-md w-full dark:bg-darkBgColor dark:text-white" placeholder="Введите примечание" type="text"/>
          </div>
          <div class="flex flex-col lg:flex-row items-center">
            <div class="flex items-center mb-3 lg:mb-0">
              <input class="mr-2" type="checkbox">
              <p class="text-xs">Подавая заявку, вы принимаете условия офертового соглашения и соглашаетесь на обработку
                ваших персональных данных в соответствии с политикой конфиденциальности</p>
            </div>
            <button type="submit" class="bg-mainColor text-white px-4 py-2 rounded-md whitespace-nowrap">
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeaveMessage"
}
</script>