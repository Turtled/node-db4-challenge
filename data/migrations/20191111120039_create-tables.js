exports.up = function (knex) {

    return knex.schema

        .createTable('recipes', tbl => {

            tbl.increments()

            tbl.string('name').notNullable().unique()

            tbl.string('description').notNullable()

            tbl.string('calories').notNullable()

        })

        .createTable('ingredients', tbl => {

            tbl.increments()

            tbl.string('name').notNullable()

        })

        .createTable('recipes-ingredients', tbl => {//this table creates a relationship between 

            tbl.increments()

            tbl
                .integer('ingredientId')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')

            tbl
                .integer('recipeId')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')

            tbl
                .unique(['recipeId', 'ingredientId'])
        })

        .createTable('instructions', tbl => {

            tbl.increments()

            tbl
                .integer('recipeId')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            tbl
                .string('instructions').notNullable()

        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipe-ingredients')//make sure to  drop intermediary tables first
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};