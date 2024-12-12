# `dataIonoscloudNfsShare` Submodule <a name="`dataIonoscloudNfsShare` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudNfsShare <a name="DataIonoscloudNfsShare" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share ionoscloud_nfs_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShare;

DataIonoscloudNfsShare.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
//  .clientGroups(IResolvable)
//  .clientGroups(java.util.List<DataIonoscloudNfsShareClientGroups>)
//  .gid(java.lang.Number)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .name(java.lang.String)
//  .partialMatch(java.lang.Boolean)
//  .partialMatch(IResolvable)
//  .quota(java.lang.Number)
//  .uid(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the Network File Storage Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.clientGroups">clientGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>></code> | client_groups block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.gid">gid</a></code> | <code>java.lang.Number</code> | The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the Network File Storage Share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Network File Storage Share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether partial matching is allowed or not when using the name filter. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.quota">quota</a></code> | <code>java.lang.Number</code> | The quota in MiB for the export. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.uid">uid</a></code> | <code>java.lang.Number</code> | The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

The ID of the Network File Storage Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#cluster_id DataIonoscloudNfsShare#cluster_id}

---

##### `clientGroups`<sup>Optional</sup> <a name="clientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.clientGroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>>

client_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#client_groups DataIonoscloudNfsShare#client_groups}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.gid"></a>

- *Type:* java.lang.Number

The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#gid DataIonoscloudNfsShare#gid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the Network File Storage Share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#id DataIonoscloudNfsShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#location DataIonoscloudNfsShare#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Network File Storage Share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#name DataIonoscloudNfsShare#name}

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.partialMatch"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether partial matching is allowed or not when using the name filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#partial_match DataIonoscloudNfsShare#partial_match}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.quota"></a>

- *Type:* java.lang.Number

The quota in MiB for the export.

The quota can restrict the amount of data that can be stored within the export. The quota can be disabled using `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#quota DataIonoscloudNfsShare#quota}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.Initializer.parameter.uid"></a>

- *Type:* java.lang.Number

The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#uid DataIonoscloudNfsShare#uid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.putClientGroups">putClientGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetClientGroups">resetClientGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetPartialMatch">resetPartialMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetUid">resetUid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putClientGroups` <a name="putClientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.putClientGroups"></a>

```java
public void putClientGroups(IResolvable OR java.util.List<DataIonoscloudNfsShareClientGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.putClientGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>>

---

##### `resetClientGroups` <a name="resetClientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetClientGroups"></a>

```java
public void resetClientGroups()
```

##### `resetGid` <a name="resetGid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetGid"></a>

```java
public void resetGid()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetName"></a>

```java
public void resetName()
```

##### `resetPartialMatch` <a name="resetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetPartialMatch"></a>

```java
public void resetPartialMatch()
```

##### `resetQuota` <a name="resetQuota" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetQuota"></a>

```java
public void resetQuota()
```

##### `resetUid` <a name="resetUid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.resetUid"></a>

```java
public void resetUid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudNfsShare resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShare;

DataIonoscloudNfsShare.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShare;

DataIonoscloudNfsShare.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShare;

DataIonoscloudNfsShare.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShare;

DataIonoscloudNfsShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataIonoscloudNfsShare.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataIonoscloudNfsShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataIonoscloudNfsShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataIonoscloudNfsShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudNfsShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroups">clientGroups</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList">DataIonoscloudNfsShareClientGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nfsPath">nfsPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroupsInput">clientGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gidInput">gidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatchInput">partialMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quotaInput">quotaInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uidInput">uidInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gid">gid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quota">quota</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uid">uid</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `clientGroups`<sup>Required</sup> <a name="clientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroups"></a>

```java
public DataIonoscloudNfsShareClientGroupsList getClientGroups();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList">DataIonoscloudNfsShareClientGroupsList</a>

---

##### `nfsPath`<sup>Required</sup> <a name="nfsPath" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nfsPath"></a>

```java
public java.lang.String getNfsPath();
```

- *Type:* java.lang.String

---

##### `clientGroupsInput`<sup>Optional</sup> <a name="clientGroupsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clientGroupsInput"></a>

```java
public java.lang.Object getClientGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gidInput"></a>

```java
public java.lang.Number getGidInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partialMatchInput`<sup>Optional</sup> <a name="partialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatchInput"></a>

```java
public java.lang.Object getPartialMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quotaInput"></a>

```java
public java.lang.Number getQuotaInput();
```

- *Type:* java.lang.Number

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uidInput"></a>

```java
public java.lang.Number getUidInput();
```

- *Type:* java.lang.Number

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.gid"></a>

```java
public java.lang.Number getGid();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partialMatch`<sup>Required</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.partialMatch"></a>

```java
public java.lang.Object getPartialMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.quota"></a>

```java
public java.lang.Number getQuota();
```

- *Type:* java.lang.Number

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.uid"></a>

```java
public java.lang.Number getUid();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShare.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudNfsShareClientGroups <a name="DataIonoscloudNfsShareClientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShareClientGroups;

DataIonoscloudNfsShareClientGroups.builder()
//  .description(java.lang.String)
//  .hosts(java.util.List<java.lang.String>)
//  .ipNetworks(java.util.List<java.lang.String>)
//  .nfs(IResolvable)
//  .nfs(java.util.List<DataIonoscloudNfsShareClientGroupsNfs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.description">description</a></code> | <code>java.lang.String</code> | Optional description for the clients groups. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | A singular host allowed to connect to the share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.ipNetworks">ipNetworks</a></code> | <code>java.util.List<java.lang.String></code> | The allowed host or network to which the export is being shared. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.nfs">nfs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>></code> | nfs block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description for the clients groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#description DataIonoscloudNfsShare#description}

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

A singular host allowed to connect to the share.

The host can be specified as IP address and can be either IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#hosts DataIonoscloudNfsShare#hosts}

---

##### `ipNetworks`<sup>Optional</sup> <a name="ipNetworks" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.ipNetworks"></a>

```java
public java.util.List<java.lang.String> getIpNetworks();
```

- *Type:* java.util.List<java.lang.String>

The allowed host or network to which the export is being shared.

The IP address can be either IPv4 or IPv6 and has to be given with CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#ip_networks DataIonoscloudNfsShare#ip_networks}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups.property.nfs"></a>

```java
public java.lang.Object getNfs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#nfs DataIonoscloudNfsShare#nfs}

---

### DataIonoscloudNfsShareClientGroupsNfs <a name="DataIonoscloudNfsShareClientGroupsNfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShareClientGroupsNfs;

DataIonoscloudNfsShareClientGroupsNfs.builder()
//  .squash(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs.property.squash">squash</a></code> | <code>java.lang.String</code> | The squash mode for the export. |

---

##### `squash`<sup>Optional</sup> <a name="squash" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs.property.squash"></a>

```java
public java.lang.String getSquash();
```

- *Type:* java.lang.String

The squash mode for the export.

The squash mode can be: none - No squash mode. no mapping, root-anonymous - Map root user to anonymous uid, all-anonymous - Map all users to anonymous uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#squash DataIonoscloudNfsShare#squash}

---

### DataIonoscloudNfsShareConfig <a name="DataIonoscloudNfsShareConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShareConfig;

DataIonoscloudNfsShareConfig.builder()
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
    .clusterId(java.lang.String)
//  .clientGroups(IResolvable)
//  .clientGroups(java.util.List<DataIonoscloudNfsShareClientGroups>)
//  .gid(java.lang.Number)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .name(java.lang.String)
//  .partialMatch(java.lang.Boolean)
//  .partialMatch(IResolvable)
//  .quota(java.lang.Number)
//  .uid(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the Network File Storage Cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clientGroups">clientGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>></code> | client_groups block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.gid">gid</a></code> | <code>java.lang.Number</code> | The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the Network File Storage Share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Network File Storage Share. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.partialMatch">partialMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether partial matching is allowed or not when using the name filter. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.quota">quota</a></code> | <code>java.lang.Number</code> | The quota in MiB for the export. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.uid">uid</a></code> | <code>java.lang.Number</code> | The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

The ID of the Network File Storage Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#cluster_id DataIonoscloudNfsShare#cluster_id}

---

##### `clientGroups`<sup>Optional</sup> <a name="clientGroups" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.clientGroups"></a>

```java
public java.lang.Object getClientGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>>

client_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#client_groups DataIonoscloudNfsShare#client_groups}

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.gid"></a>

```java
public java.lang.Number getGid();
```

- *Type:* java.lang.Number

The group ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#gid DataIonoscloudNfsShare#gid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the Network File Storage Share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#id DataIonoscloudNfsShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the Network File Storage Cluster. Available locations: 'de/fra, 'de/txl'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#location DataIonoscloudNfsShare#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Network File Storage Share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#name DataIonoscloudNfsShare#name}

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.partialMatch"></a>

```java
public java.lang.Object getPartialMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether partial matching is allowed or not when using the name filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#partial_match DataIonoscloudNfsShare#partial_match}

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.quota"></a>

```java
public java.lang.Number getQuota();
```

- *Type:* java.lang.Number

The quota in MiB for the export.

The quota can restrict the amount of data that can be stored within the export. The quota can be disabled using `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#quota DataIonoscloudNfsShare#quota}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareConfig.property.uid"></a>

```java
public java.lang.Number getUid();
```

- *Type:* java.lang.Number

The user ID that will own the exported directory. If not set, **anonymous** (`512`) will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.8/docs/data-sources/nfs_share#uid DataIonoscloudNfsShare#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudNfsShareClientGroupsList <a name="DataIonoscloudNfsShareClientGroupsList" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShareClientGroupsList;

new DataIonoscloudNfsShareClientGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.get"></a>

```java
public DataIonoscloudNfsShareClientGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>>

---


### DataIonoscloudNfsShareClientGroupsNfsList <a name="DataIonoscloudNfsShareClientGroupsNfsList" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShareClientGroupsNfsList;

new DataIonoscloudNfsShareClientGroupsNfsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.get"></a>

```java
public DataIonoscloudNfsShareClientGroupsNfsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>>

---


### DataIonoscloudNfsShareClientGroupsNfsOutputReference <a name="DataIonoscloudNfsShareClientGroupsNfsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShareClientGroupsNfsOutputReference;

new DataIonoscloudNfsShareClientGroupsNfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resetSquash">resetSquash</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSquash` <a name="resetSquash" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.resetSquash"></a>

```java
public void resetSquash()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squashInput">squashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squash">squash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `squashInput`<sup>Optional</sup> <a name="squashInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squashInput"></a>

```java
public java.lang.String getSquashInput();
```

- *Type:* java.lang.String

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.squash"></a>

```java
public java.lang.String getSquash();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>

---


### DataIonoscloudNfsShareClientGroupsOutputReference <a name="DataIonoscloudNfsShareClientGroupsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_nfs_share.DataIonoscloudNfsShareClientGroupsOutputReference;

new DataIonoscloudNfsShareClientGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetIpNetworks">resetIpNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetNfs">resetNfs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNfs` <a name="putNfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.putNfs"></a>

```java
public void putNfs(IResolvable OR java.util.List<DataIonoscloudNfsShareClientGroupsNfs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.putNfs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetIpNetworks` <a name="resetIpNetworks" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetIpNetworks"></a>

```java
public void resetIpNetworks()
```

##### `resetNfs` <a name="resetNfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.resetNfs"></a>

```java
public void resetNfs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList">DataIonoscloudNfsShareClientGroupsNfsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hostsInput">hostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworksInput">ipNetworksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfsInput">nfsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworks">ipNetworks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfs"></a>

```java
public DataIonoscloudNfsShareClientGroupsNfsList getNfs();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfsList">DataIonoscloudNfsShareClientGroupsNfsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hostsInput"></a>

```java
public java.util.List<java.lang.String> getHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipNetworksInput`<sup>Optional</sup> <a name="ipNetworksInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworksInput"></a>

```java
public java.util.List<java.lang.String> getIpNetworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.nfsInput"></a>

```java
public java.lang.Object getNfsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsNfs">DataIonoscloudNfsShareClientGroupsNfs</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipNetworks`<sup>Required</sup> <a name="ipNetworks" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.ipNetworks"></a>

```java
public java.util.List<java.lang.String> getIpNetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudNfsShare.DataIonoscloudNfsShareClientGroups">DataIonoscloudNfsShareClientGroups</a>

---



