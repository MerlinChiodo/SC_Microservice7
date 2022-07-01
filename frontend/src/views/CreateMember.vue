<template>
    <div>
        <form>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Vorname*</span>
                </div>
                <input type="text" class="form-control" id="inputFirstName" placeholder="Vorname*">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Nachname*</span>
                </div>
                <input type="text" class="form-control" id="inputLastName" placeholder="Nachname*">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Geburtsdatum*</span>
                </div>
                <input type="date" class="form-control" id="inputBirthDate" placeholder="Geburtsdatum*">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputRabatt">Rabatt</label>
                </div>
                <select class="custom-select" id="inputRabatt">
                    <option selected>Wähle Rabatt</option>
                    <option value="1">Flüchtling</option>
                    <option value="2">Stadtbus</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Beleg</span>
                </div>
                <input type="text" class="form-control" id="inputBeleg" placeholder="Beleg">
            </div>
            <button type="submit" class="btn btn-primary">Anmelden</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'CreateMember'
}
</script>