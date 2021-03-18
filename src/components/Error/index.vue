<template>
  <div class="error">
    <div>
      <img src="../../assets/images/warning.svg" alt="Atenção" />
      <p>
        Ops...Serviço Indisponível no momento. Por favor, tente novamente mais
        tarde.
      </p>
    </div>
  </div>
</template>

<style>
.error {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error div {
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  border-radius: 4px;
  border: 3px solid rgba(0, 0, 0, 0.7);
}
.error p {
  font-family: 20px;
  color: #ffffff;
}
.error i {
  font-size: 30px;
}
.error img {
  max-width: 100px;
  margin: 0 auto;
  height: auto;
  display: block;
  margin-bottom: 20px;
}
</style>
