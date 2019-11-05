/**
 * ***************************************
 * Centro Cristiano de Loja Web
 * @author Jerson Morocho
 * 
 * ---------------------------------------
 * - Creation (9-sep-2019)
 * - Test (7-oct-2019)
 * ---------------------------------------
 */

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterTestingModule } from "@angular/router/testing";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugEl: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, FaIconComponent],
      imports: [RouterTestingModule, NgbTooltipModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = debugEl.nativeElement;
    fixture.detectChanges();
  });

  it("should create header", () => {
    expect(component).toBeTruthy();
  });

  it("should click sidebarToggle", async(() => {
    spyOn(component, "sidebarToggle").and.callThrough();

    const sidebar = element.querySelector("button");
    sidebar.click();

    expect(component.sidebarToggle).toHaveBeenCalled();
  }));

  it("should call sidebarOpen if sidebarVisible is false", () => {
    const sidebar = element.querySelector("button");

    spyOn(component, "sidebarToggle").and.callThrough();
    spyOn(component, "sidebarOpen").and.callThrough();

    sidebar.click();

    expect(component.sidebarToggle).toHaveBeenCalled();
    expect(component.sidebarVisible).toBe(true);
    expect(component.sidebarOpen).toHaveBeenCalled();
  });

  it("should call sidebarClose if sidebarVisible is true", () => {
    const sidebar = element.querySelector("button");

    spyOn(component, "sidebarToggle").and.callThrough();
    spyOn(component, "sidebarClose").and.callThrough();

    sidebar.click();
    sidebar.click();

    expect(component.sidebarToggle).toHaveBeenCalled();
    expect(component.sidebarVisible).toBe(false);
    expect(component.sidebarClose).toHaveBeenCalled();
  });

  it("should add 'toggled' class", async(() => {
    const sidebar = element.querySelector("button");

    spyOn(component, "sidebarToggle").and.callThrough();
    spyOn(component, "sidebarOpen").and.callThrough();

    sidebar.click();
    const html = document.getElementsByTagName("html")[0];

    expect(component.sidebarToggle).toHaveBeenCalled();
    expect(component.sidebarOpen).toHaveBeenCalled();
    expect(html.className).toContain("nav-open");
  }));

  it("should remove 'toggled' class", () => {
    const sidebar = element.querySelector("button");

    spyOn(component, "sidebarToggle").and.callThrough();
    spyOn(component, "sidebarClose").and.callThrough();

    sidebar.click();
    sidebar.click();
    const html = document.getElementsByTagName("html")[0];

    expect(component.sidebarToggle).toHaveBeenCalled();
    expect(component.sidebarVisible).toBe(false);
    expect(html.className).not.toContain("nav-open");
  });

  it("should add 'transparent navbar'", () => {
    window.dispatchEvent(new Event("scroll"));
    const navbar = component.navbar.nativeElement;

    expect(navbar.className).toContain("navbar-transparent");
  });

  // it("should remove 'transparent navbar'", () => {
  // });
});
