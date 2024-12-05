# `dataIonoscloudApplicationLoadbalancer` Submodule <a name="`dataIonoscloudApplicationLoadbalancer` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudApplicationLoadbalancer <a name="DataIonoscloudApplicationLoadbalancer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer ionoscloud_application_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer.DataIonoscloudApplicationLoadbalancer;

DataIonoscloudApplicationLoadbalancer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .partialMatch(java.lang.Boolean)
//  .partialMatch(IResolvable)
//  .timeouts(DataIonoscloudApplicationLoadbalancerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#datacenter_id DataIonoscloudApplicationLoadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#id DataIonoscloudApplicationLoadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether partial matching is allowed or not when using name argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#datacenter_id DataIonoscloudApplicationLoadbalancer#datacenter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#id DataIonoscloudApplicationLoadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Application Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#name DataIonoscloudApplicationLoadbalancer#name}

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.partialMatch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether partial matching is allowed or not when using name argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#partial_match DataIonoscloudApplicationLoadbalancer#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#timeouts DataIonoscloudApplicationLoadbalancer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetPartialMatch">resetPartialMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.putTimeouts"></a>

```java
public void putTimeouts(DataIonoscloudApplicationLoadbalancerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetName"></a>

```java
public void resetName()
```

##### `resetPartialMatch` <a name="resetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetPartialMatch"></a>

```java
public void resetPartialMatch()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudApplicationLoadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer.DataIonoscloudApplicationLoadbalancer;

DataIonoscloudApplicationLoadbalancer.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer.DataIonoscloudApplicationLoadbalancer;

DataIonoscloudApplicationLoadbalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer.DataIonoscloudApplicationLoadbalancer;

DataIonoscloudApplicationLoadbalancer.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer.DataIonoscloudApplicationLoadbalancer;

DataIonoscloudApplicationLoadbalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataIonoscloudApplicationLoadbalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataIonoscloudApplicationLoadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataIonoscloudApplicationLoadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataIonoscloudApplicationLoadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudApplicationLoadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.centralLogging">centralLogging</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.flowlog">flowlog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList">DataIonoscloudApplicationLoadbalancerFlowlogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.lbPrivateIps">lbPrivateIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.listenerLan">listenerLan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.loggingFormat">loggingFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.targetLan">targetLan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference">DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.partialMatchInput">partialMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `centralLogging`<sup>Required</sup> <a name="centralLogging" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.centralLogging"></a>

```java
public IResolvable getCentralLogging();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `flowlog`<sup>Required</sup> <a name="flowlog" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.flowlog"></a>

```java
public DataIonoscloudApplicationLoadbalancerFlowlogList getFlowlog();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList">DataIonoscloudApplicationLoadbalancerFlowlogList</a>

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lbPrivateIps`<sup>Required</sup> <a name="lbPrivateIps" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.lbPrivateIps"></a>

```java
public java.util.List<java.lang.String> getLbPrivateIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `listenerLan`<sup>Required</sup> <a name="listenerLan" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.listenerLan"></a>

```java
public java.lang.Number getListenerLan();
```

- *Type:* java.lang.Number

---

##### `loggingFormat`<sup>Required</sup> <a name="loggingFormat" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.loggingFormat"></a>

```java
public java.lang.String getLoggingFormat();
```

- *Type:* java.lang.String

---

##### `targetLan`<sup>Required</sup> <a name="targetLan" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.targetLan"></a>

```java
public java.lang.Number getTargetLan();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.timeouts"></a>

```java
public DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference">DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference</a>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partialMatchInput`<sup>Optional</sup> <a name="partialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.partialMatchInput"></a>

```java
public java.lang.Object getPartialMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partialMatch`<sup>Required</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.partialMatch"></a>

```java
public java.lang.Object getPartialMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudApplicationLoadbalancerConfig <a name="DataIonoscloudApplicationLoadbalancerConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer.DataIonoscloudApplicationLoadbalancerConfig;

DataIonoscloudApplicationLoadbalancerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .datacenterId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .partialMatch(java.lang.Boolean)
//  .partialMatch(IResolvable)
//  .timeouts(DataIonoscloudApplicationLoadbalancerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#datacenter_id DataIonoscloudApplicationLoadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#id DataIonoscloudApplicationLoadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether partial matching is allowed or not when using name argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#datacenter_id DataIonoscloudApplicationLoadbalancer#datacenter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#id DataIonoscloudApplicationLoadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Application Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#name DataIonoscloudApplicationLoadbalancer#name}

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.partialMatch"></a>

```java
public java.lang.Object getPartialMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether partial matching is allowed or not when using name argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#partial_match DataIonoscloudApplicationLoadbalancer#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerConfig.property.timeouts"></a>

```java
public DataIonoscloudApplicationLoadbalancerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#timeouts DataIonoscloudApplicationLoadbalancer#timeouts}

---

### DataIonoscloudApplicationLoadbalancerFlowlog <a name="DataIonoscloudApplicationLoadbalancerFlowlog" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer.DataIonoscloudApplicationLoadbalancerFlowlog;

DataIonoscloudApplicationLoadbalancerFlowlog.builder()
    .build();
```


### DataIonoscloudApplicationLoadbalancerTimeouts <a name="DataIonoscloudApplicationLoadbalancerTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts;

DataIonoscloudApplicationLoadbalancerTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#create DataIonoscloudApplicationLoadbalancer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#default DataIonoscloudApplicationLoadbalancer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#delete DataIonoscloudApplicationLoadbalancer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#update DataIonoscloudApplicationLoadbalancer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#create DataIonoscloudApplicationLoadbalancer#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#default DataIonoscloudApplicationLoadbalancer#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#delete DataIonoscloudApplicationLoadbalancer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/data-sources/application_loadbalancer#update DataIonoscloudApplicationLoadbalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudApplicationLoadbalancerFlowlogList <a name="DataIonoscloudApplicationLoadbalancerFlowlogList" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList;

new DataIonoscloudApplicationLoadbalancerFlowlogList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.get"></a>

```java
public DataIonoscloudApplicationLoadbalancerFlowlogOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataIonoscloudApplicationLoadbalancerFlowlogOutputReference <a name="DataIonoscloudApplicationLoadbalancerFlowlogOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference;

new DataIonoscloudApplicationLoadbalancerFlowlogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlog">DataIonoscloudApplicationLoadbalancerFlowlog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlogOutputReference.property.internalValue"></a>

```java
public DataIonoscloudApplicationLoadbalancerFlowlog getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerFlowlog">DataIonoscloudApplicationLoadbalancerFlowlog</a>

---


### DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference <a name="DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference;

new DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancer.DataIonoscloudApplicationLoadbalancerTimeouts">DataIonoscloudApplicationLoadbalancerTimeouts</a>

---



