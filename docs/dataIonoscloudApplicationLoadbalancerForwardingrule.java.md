# `data_ionoscloud_application_loadbalancer_forwardingrule`

Refer to the Terraform Registory for docs: [`data_ionoscloud_application_loadbalancer_forwardingrule`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule).

# `dataIonoscloudApplicationLoadbalancerForwardingrule` Submodule <a name="`dataIonoscloudApplicationLoadbalancerForwardingrule` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudApplicationLoadbalancerForwardingrule <a name="DataIonoscloudApplicationLoadbalancerForwardingrule" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule ionoscloud_application_loadbalancer_forwardingrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule;

DataIonoscloudApplicationLoadbalancerForwardingrule.Builder.create(Construct scope, java.lang.String id)
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
    .applicationLoadbalancerId(java.lang.String)
    .datacenterId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .partialMatch(java.lang.Boolean)
//  .partialMatch(IResolvable)
//  .timeouts(DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.applicationLoadbalancerId">applicationLoadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#application_loadbalancer_id DataIonoscloudApplicationLoadbalancerForwardingrule#application_loadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#datacenter_id DataIonoscloudApplicationLoadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#id DataIonoscloudApplicationLoadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Application Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether partial matching is allowed or not when using name argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationLoadbalancerId`<sup>Required</sup> <a name="applicationLoadbalancerId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.applicationLoadbalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#application_loadbalancer_id DataIonoscloudApplicationLoadbalancerForwardingrule#application_loadbalancer_id}.

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#datacenter_id DataIonoscloudApplicationLoadbalancerForwardingrule#datacenter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#id DataIonoscloudApplicationLoadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Application Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#name DataIonoscloudApplicationLoadbalancerForwardingrule#name}

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.partialMatch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether partial matching is allowed or not when using name argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#partial_match DataIonoscloudApplicationLoadbalancerForwardingrule#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#timeouts DataIonoscloudApplicationLoadbalancerForwardingrule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetPartialMatch">resetPartialMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts"></a>

```java
public void putTimeouts(DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetName"></a>

```java
public void resetName()
```

##### `resetPartialMatch` <a name="resetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetPartialMatch"></a>

```java
public void resetPartialMatch()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule;

DataIonoscloudApplicationLoadbalancerForwardingrule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule;

DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule;

DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.clientTimeout">clientTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.httpRules">httpRules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerIp">listenerIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.serverCertificates">serverCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference">DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput">applicationLoadbalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatchInput">partialMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId">applicationLoadbalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `clientTimeout`<sup>Required</sup> <a name="clientTimeout" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.clientTimeout"></a>

```java
public java.lang.Number getClientTimeout();
```

- *Type:* java.lang.Number

---

##### `httpRules`<sup>Required</sup> <a name="httpRules" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.httpRules"></a>

```java
public DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList getHttpRules();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList</a>

---

##### `listenerIp`<sup>Required</sup> <a name="listenerIp" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerIp"></a>

```java
public java.lang.String getListenerIp();
```

- *Type:* java.lang.String

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.listenerPort"></a>

```java
public java.lang.Number getListenerPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `serverCertificates`<sup>Required</sup> <a name="serverCertificates" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.serverCertificates"></a>

```java
public java.util.List<java.lang.String> getServerCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeouts"></a>

```java
public DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference">DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a>

---

##### `applicationLoadbalancerIdInput`<sup>Optional</sup> <a name="applicationLoadbalancerIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput"></a>

```java
public java.lang.String getApplicationLoadbalancerIdInput();
```

- *Type:* java.lang.String

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partialMatchInput`<sup>Optional</sup> <a name="partialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatchInput"></a>

```java
public java.lang.Object getPartialMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `applicationLoadbalancerId`<sup>Required</sup> <a name="applicationLoadbalancerId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId"></a>

```java
public java.lang.String getApplicationLoadbalancerId();
```

- *Type:* java.lang.String

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partialMatch`<sup>Required</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.partialMatch"></a>

```java
public java.lang.Object getPartialMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingrule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudApplicationLoadbalancerForwardingruleConfig <a name="DataIonoscloudApplicationLoadbalancerForwardingruleConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig;

DataIonoscloudApplicationLoadbalancerForwardingruleConfig.builder()
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
    .applicationLoadbalancerId(java.lang.String)
    .datacenterId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .partialMatch(java.lang.Boolean)
//  .partialMatch(IResolvable)
//  .timeouts(DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId">applicationLoadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#application_loadbalancer_id DataIonoscloudApplicationLoadbalancerForwardingrule#application_loadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#datacenter_id DataIonoscloudApplicationLoadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#id DataIonoscloudApplicationLoadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Application Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether partial matching is allowed or not when using name argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationLoadbalancerId`<sup>Required</sup> <a name="applicationLoadbalancerId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId"></a>

```java
public java.lang.String getApplicationLoadbalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#application_loadbalancer_id DataIonoscloudApplicationLoadbalancerForwardingrule#application_loadbalancer_id}.

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#datacenter_id DataIonoscloudApplicationLoadbalancerForwardingrule#datacenter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#id DataIonoscloudApplicationLoadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Application Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#name DataIonoscloudApplicationLoadbalancerForwardingrule#name}

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.partialMatch"></a>

```java
public java.lang.Object getPartialMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether partial matching is allowed or not when using name argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#partial_match DataIonoscloudApplicationLoadbalancerForwardingrule#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleConfig.property.timeouts"></a>

```java
public DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#timeouts DataIonoscloudApplicationLoadbalancerForwardingrule#timeouts}

---

### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules;

DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules.builder()
    .build();
```


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions;

DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions.builder()
    .build();
```


### DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts <a name="DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts;

DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#create DataIonoscloudApplicationLoadbalancerForwardingrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#default DataIonoscloudApplicationLoadbalancerForwardingrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#delete DataIonoscloudApplicationLoadbalancerForwardingrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#update DataIonoscloudApplicationLoadbalancerForwardingrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#create DataIonoscloudApplicationLoadbalancerForwardingrule#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#default DataIonoscloudApplicationLoadbalancerForwardingrule#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#delete DataIonoscloudApplicationLoadbalancerForwardingrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.3.6/docs/data-sources/application_loadbalancer_forwardingrule#update DataIonoscloudApplicationLoadbalancerForwardingrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList;

new DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get"></a>

```java
public DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference;

new DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate">negate</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate"></a>

```java
public IResolvable getNegate();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue"></a>

```java
public DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditions</a>

---


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList;

new DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.get"></a>

```java
public DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference <a name="DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference;

new DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery">dropQuery</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage">responseMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup">targetGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions"></a>

```java
public DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a>

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `dropQuery`<sup>Required</sup> <a name="dropQuery" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery"></a>

```java
public IResolvable getDropQuery();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `responseMessage`<sup>Required</sup> <a name="responseMessage" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage"></a>

```java
public java.lang.String getResponseMessage();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup"></a>

```java
public java.lang.String getTargetGroup();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue"></a>

```java
public DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules">DataIonoscloudApplicationLoadbalancerForwardingruleHttpRules</a>

---


### DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference <a name="DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_application_loadbalancer_forwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference;

new DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudApplicationLoadbalancerForwardingrule.DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts">DataIonoscloudApplicationLoadbalancerForwardingruleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



