<template>
    <div>
        {{persons}} <br>
        {{roles}} <br>
        <button @click="getRolesByPersonId()">click</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            persons: [
                {
                    id: 1,
                    name: "Karl"
                },
                {
                    id: 2,
                    name: "Irma"
                },
                {
                    id: 3,
                    name: "David"
                }
            ],

            roles: {
                0: {
                    id: 1,
                    title: "admin",
                    persons: [1, 2],

                },
                1: {
                    id: 2,
                    title: "editor",
                    persons: [1]
                },
                2: {
                    id: 3,
                    title: "moderator",
                    persons: [3]
                }
            }
        }
    },
    mounted() {
        // this.getRoles();
        console.log(this.getRolesByPersonId(2));
    },
    methods: {

        getRolesByPersonId  ( personId) {
            return Object.values(this.roles).reduce((accumulator, currentValue) => {
                if (currentValue.persons?.includes(personId)) {
                    return [...accumulator, currentValue]
                    alert('filter');
                }
                return accumulator
            }, [])
        },
       



        getRoles() {
            return Object.values(this.roles).map(({ id, title, persons }) => {
                return {
                    id,
                    title,
                    persons: [...this.persons].filter((p) => persons.includes(p.id)),
                };
            });
        },

    }

}
</script>

<style lang="scss" scoped>

</style>