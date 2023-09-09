<template>
  <div class="container mx-auto px-4 lg:px-0 py-10 mt-10">
    <h2 class="text-2xl font-semibold mb-10 dark:text-whiteColor">Вы можете найти нас</h2>
    <div class="flex border border-gray-200 rounded-2xl bg-white">
      <div class="w-1/3">
        <iframe class="rounded-l-2xl"
                frameborder="0"
                height="649"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A8a9d23a8cc635bd099bc33d6ccc533d8d18c977c429689eaf69c699df8b5ee23&amp;source=constructor"
                width="100%"></iframe>
      </div>
      <div class="w-2/3 p-7 flex flex-col justify-center">
        <h3 class="text-2xl font-semibold mb-3">Оставьте нам сообщение</h3>
        <p class="text-sm mb-10">Оставьте заявку и мы перезвоним через 30 мин</p>
        <form action="">
          <div class="mb-4">
            <p class="mb-1">Email</p>
            <input class="border w-full p-2 rounded-md" placeholder="Введите email" type="text">
          </div>
          <div class="mb-4">
            <p class="mb-1">Имя</p>
            <input class="border w-full p-2 rounded-md" placeholder="Введите имя" type="text">
          </div>
          <div class="mb-4">
            <p class="mb-1">Телефон</p>
            <input class="border w-full p-2 rounded-md" placeholder="Введите телефон" type="text">
          </div>
          <div class="mb-4">
            <p class="mb-1">Примечание</p>
            <textarea class="border w-full p-2 rounded-md" placeholder="Введите примечание" type="text"/>
          </div>
          <div class="flex items-center">
            <div class="flex items-center">
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