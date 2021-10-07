class CreateInvoices < ActiveRecord::Migration[6.0]
  def change
    create_table :invoices do |t|
      t.string :name
      t.string :grade
      t.decimal :amount, precision: 10, scale: 2, default: 0
      t.date :date

      t.timestamps
    end
  end
end
