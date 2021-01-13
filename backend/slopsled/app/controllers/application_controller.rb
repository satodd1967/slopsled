class ApplicationController < ActionController::API

    def calc_subtotal
        ((self.line_items.map {|li| li.dish.price}).reduce {|price, n| n + price}).round(2)
    end
          
    def calc_tax
        ((self.calc_subtotal * 1.08) - self.calc_subtotal).round(2)
    end
          
    def calc_total
        self.calc_subtotal + self.calc_tax
    end
    
end
