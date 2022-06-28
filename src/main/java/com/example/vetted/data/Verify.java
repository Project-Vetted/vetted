package com.example.vetted.data;


public class Verify {
   public String veteranStatus;

    public Verify(String veteranStatus) {
        this.veteranStatus = veteranStatus;
    }

    public String getStatus() {
        return veteranStatus;
    }


    public void setStatus(String status) {
        this.veteranStatus = status;
    }
}
